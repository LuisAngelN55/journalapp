import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadNotes, fileUpload } from "../../helpers";
import { deleteNoteById, addNewEmptyNote, setActiveNote, savingNewNote, setNotes, setSaving, updateNote,setPhotosToActiveNote } from "./";

export const startNewNote = () => {
    return async( dispatch, getState ) => {

        dispatch( savingNewNote() );
        const { uid } = getState().auth;
        //uid

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FirebaseDB, `app-Journal/users/${ uid }/journal/notes` ) );
        const setDocResp = await setDoc( newDoc, newNote )

        newNote.id = newDoc.id;

        //dispatch
        dispatch( addNewEmptyNote( newNote) );
        dispatch( setActiveNote( newNote) );
    }
}

export const startLoadingNotes = () => {

    return async( dispatch, getState ) => {
        const { uid } = getState().auth;
        if ( !uid ) throw new Error('El uid del usuario no existe');
        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ) );
    }
}

export const startSavingNote = () => {
    return async( dispatch, getState ) => {

        dispatch( setSaving() );
        

        const { uid } = getState().auth;
        const { active:note } = getState().journal;
        const noteToFireStore = {...note};
        delete noteToFireStore.id;

        const docRef = doc( FirebaseDB, `app-Journal/users/${ uid }/journal/notes/${ note.id }`);
        await setDoc( docRef, noteToFireStore, { merge: true } );

        dispatch( updateNote(note) );

    }
}


export const startUploadingFiles = ( files = [] ) => {
    return async( dispatch ) => {
        dispatch( setSaving() );

        // const resp_url = await fileUpload( files[0] );
        
        const fileUploadPromises = [];
        for ( const file of files ) {
            fileUploadPromises.push( fileUpload( file ) );
        }

        const photosUrls = await Promise.all( fileUploadPromises );
        
        dispatch( setPhotosToActiveNote( photosUrls ) );
    }
}

export const startDeletingNote = () => {
    return async( dispatch, getState ) => {
        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const docRef = doc( FirebaseDB, `app-Journal/users/${ uid }/journal/notes/${ note.id }` );
        await deleteDoc( docRef );

        dispatch( deleteNoteById( note.id ) );
    }
}
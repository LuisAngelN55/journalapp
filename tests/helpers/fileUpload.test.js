import { v2 as cloudinary } from "cloudinary";
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
    cloud_name: 'zuntrix',
    api_key: '632117327621329',
    api_secret: 'fdRtU8CPWmM1KQGQXjqcsknN7-M',
    secure: true
})

describe('Pruebas en fileUpload', () => {
  
    test('Debe subir el archivo correctamente a Cloudinary', async() => { 
        
        const imageUrl = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
        const resp = await fetch( imageUrl );
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');
        const url = await fileUpload( file );
        
        expect( typeof url ).toBe('string');

        // console.log( url );

        const segments = url.split('/');
        // console.log(segments);
        const imageId = segments[ segments.length -1 ].replace( '.jpg', '' );
        // console.log( imageId);

        const cloudResp = await cloudinary.api.delete_resources( [ 'journal-app/' + imageId ], {
            resource_type: 'image'
        } );
        // console.log( cloudResp );

     });

     test('should return "null"', async() => { 

        const file = new File([], 'foto.jpg');
        const url = await fileUpload( file );
        
        expect( url ).toBe( null );

      });

})

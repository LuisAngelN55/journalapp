import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
import { JournalLayout } from "../layout/JournalLayout"
import { Noteview, NothingSelectedView } from "../views/"


export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laboriosam velit hic, suscipit recusandae, omnis exercitationem eveniet excepturi quas unde, eius ipsa earum! Sint, sed cum optio sit molestiae dolores tempore. Quaerat laboriosam quos velit nobis! Aspernatur eaque reprehenderit tenetur optio quasi enim dolores blanditiis nam at, iusto architecto eum temporibus cumque ullam voluptates dicta officia aliquid! Consequuntur, fugit consequatur! Dolorem error, eveniet praesentium, temporibus non cum cumque amet accusamus sed quis nisi? Nihil illum repellat at cum, rerum sint magni! Unde harum enim provident delectus autem, inventore tempore veniam animi dicta? Quam ex pariatur, distinctio nobis soluta magni sapiente.</Typography> */}
      <NothingSelectedView />
      {/* <Noteview /> */}

      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{fontSize: 30}} />

      </IconButton>


    </JournalLayout>
  )
}

import CommentList from "../../components/CommentList";
import { Box } from '@mui/material';


function CommentListPage() {
    return (
      <Box sx={{ width: '94vw', p: 2}}>
        <CommentList />
      </Box>
    );
  }

  export default CommentListPage;
import FacialExpression from './components/FacialExpression';
import MoodSongs from './components/MoodSongs';
import { useState } from "react";

const App = () => {

      const [Songs , setSongs] = useState([
            {
                title:"test_title",
                artist:"test_artist",
                url:"test_url",
            },
             {
                title:"test_title",
                artist:"test_artist",
                url:"test_url",
            },
             {
                title:"test_title",
                artist:"test_artist",
                url:"test_url",
            },
             {
                title:"test_title",
                artist:"test_artist",
                url:"test_url",
            },
    
        ]);

  return (
   <>
   <FacialExpression setSongs={setSongs} />
   <MoodSongs Songs={Songs} />
   </>
  );
};

export default App
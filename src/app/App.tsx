import React from 'react';
import s from "./App.module.scss"
import Header from "./header/Header";
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/routes";

function App() {
    // const dispatch = useAppDispatch()
    // const isInitialized = useSelector<AppRootStateType, boolean>(store => store.app.initialized)

    // useEffect(() => {
        // dispatch(initializeAppTC())
    // }, [])

    // if (!isInitialized) {
    //     return <div
    //         style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
    //         <CircularProgress/>
    //     </div>
    // }
  return (
      <div className={s.appContainer}>
          <Header/>
          <RouterProvider router={router}/>
      </div>
  );
}

export default App;

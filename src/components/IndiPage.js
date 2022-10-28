import React,{ useEffect }  from 'react'
import { useParams } from 'react-router';

const UserPageWrapper = () => {
    const { edgg } = useParams();
    useEffect(() => {
      console.log({ edgg }); // <-- log param in effect
    }, [edgg]);
    return <h2>{edgg}</h2>;
  };


export default UserPageWrapper

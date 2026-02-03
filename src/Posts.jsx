import './Post.css'

export default function Post({Post}){
    const {title,body,id,userId} =Post;
    return(
        <div className='post'>
            <h5>Title : {title}</h5>
            <h3><small>UserId : {userId}</small></h3>
            <h3><small>PostId : {id}</small></h3>
            <p>Body : {body}</p>
        </div>
    )
}
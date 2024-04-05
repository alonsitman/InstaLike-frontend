import { Post } from "./Post"

export function PostList({ posts }) {

    return (
        <ul className="post-list">
            {posts.map(post => (
                <li key={post._id} id={post.id}>
                    <Post post={post} />
                </li>

            ))}
        </ul>
    )
}
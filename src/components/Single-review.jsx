import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SingleReviewCard } from './Review-card';
import { PostComment } from './Post-comment';
import { Comments } from './Comments';

export const SingleReview = ({ user }) => {
	const [review, setReview] = useState([]);
	let { review_id } = useParams();

	const [comments, setComments] = useState([]);
	const [commentError, setCommentError] = useState(null);
	const [commentsVisible, setCommentsVisible] = useState(true);
	const [commentCounter, setCommentCounter] = useState(null);

	return (
		<ul className='single-review'>
			<SingleReviewCard
				review={review}
				setCommentCounter={setCommentCounter}
				setCommentsVisible={setCommentsVisible}
				setReview={setReview}
				commentCounter={commentCounter}
				review_id={review_id}
			/>

			<PostComment
				user={user}
				review_id={review_id}
				setComments={setComments}
				setCommentCounter={setCommentCounter}
				setCommentsVisible={setCommentsVisible}
			/>
      {commentsVisible? (<Comments
				setCommentError={setCommentError}
				setComments={setComments}
				review_id={review_id}
				commentError={commentError}
				comments={comments}
				commentsVisible={commentsVisible}
        user={user}
			/>) : null}
		</ul>
	);
};

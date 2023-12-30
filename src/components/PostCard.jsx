import React, { Suspense, useState } from "react";
const Modal = React.lazy(() => import("../shared/components/Modal"));

const PostCard = ({ userPosts }) => {
    const [selectedPost, setSelectedPost] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const modalOpenHandler = (post) => {
        setSelectedPost(post);
        setIsOpen(true);
    };

    return (
        <>
            <section className="text-gray-600">
                <div className="container py-12">
                    <div className="flex flex-wrap -m-4">
                        {userPosts?.map((post) => (
                            <div key={post.id} className="p-4 lg:w-1/3 cursor-pointer" onClick={() => modalOpenHandler(post)}>
                                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-10 pb-10 rounded-lg overflow-hidden relative">
                                    <h2 className="text-xl font-bold uppercase text-gray-900 mb-3">{post?.title}</h2>
                                    <p className="leading-relaxed mb-3">{post?.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Suspense fallback={<div>Loading...</div>}>
                {isOpen && (
                    <Modal
                        open={isOpen}
                        title="Post Detail"
                        onClose={() => {
                            setIsOpen(false);
                        }}
                    >
                        {selectedPost && (
                            <div>
                                <h2 className="mb-10 font-bold uppercase">{selectedPost.title}</h2>
                                <p className="font-medium">{selectedPost.body}</p>
                            </div>
                        )}
                    </Modal>
                )}
            </Suspense>
        </>
    );
};

export default PostCard;

import React, { useState } from 'react';
import { Routes, Route } from 'react-router';
import ReactModal from 'react-modal';
// import { translate } from 'react-i18next';

import routes from './routes';
import { AppHeader } from './cmps/AppHeader';
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { PostDetailsPage } from './pages/PostDetailsPage';
import { ProfilePage } from './pages/ProfilePage';
import { followersPage } from './pages/FollowersPage';
import { CreatePostModal } from './cmps/CreatePostModal';

export function App() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenCreatePost = () => {
            setIsModalOpen(true)
        }
    
    const handleCloseCreatePost = () => {
        setIsModalOpen(false)
      }
    

    return (
        <div className='app main-container'>
            <AppHeader handleOpenCreatePost={handleOpenCreatePost}/>

            <ReactModal  isOpen={isModalOpen}
                    onRequestClose={ handleCloseCreatePost }
                    style={{ 
                        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)'},
                        content: { position: 'fixed', 
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    borderRadius: '12px',
                                    padding: '0',
                        }
                    }}
            >
                <CreatePostModal />
            </ReactModal>

            <main className='main'>
                <Routes>
                    {routes.map(route => (
                        <Route key={route.path} path={route.path} element={route.component} />
                    ))}

                    <Route path='/explore' element={<ExplorePage />} >
                        <Route path='p/:postId' element={<PostDetailsPage />} />
                    </Route>
                    <Route path='/' element={<HomePage />}>
                        <Route path='p/:postId' element={<PostDetailsPage />} />
                    </Route>
                    <Route path='/profile/:userId' element={<ProfilePage />}>
                        <Route path='p/:postId' element={<PostDetailsPage />} />
                        <Route path='followers/:userId' element={<followersPage/>} />
                    </Route>
                </Routes>
            </main>
        </div>
    );
}

// style={{ display: isOpen ? 'block' : 'none'}}
// isOpen={isModalOpen} onClose={handleCloseCreatePost}

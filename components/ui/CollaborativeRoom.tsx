'use client'

import React from 'react'
import {
    RoomProvider,
    ClientSideSuspense,
  } from "@liveblocks/react/suspense";
import Header from './Header';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Editor } from '../editor/Editor';

const CollaborativeRoom = () => {
  return (
    <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          <div className="flex size-full max-h-screen flex-1 flex-col items-center overflow-hidden">
            <Header>
                <div className="flex w-fit items-center justify-center gap-2">
                    <p className='document-title'> Share</p>
                </div>
                <SignedOut>
                    <SignInButton/>
                </SignedOut>
                <SignedIn>
                    <UserButton/>
                </SignedIn>
            </Header>
        <Editor/>
          </div>
        </ClientSideSuspense>
      </RoomProvider>
  )
}

export default CollaborativeRoom
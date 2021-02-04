import React from 'react';
import { Story } from './Story';
import "./StoryReel.css"

export const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story
                image="https://raddevon.com/wp-content/uploads/2018/10/react.jpg"
                profileSrc="https://avatars.githubusercontent.com/u/76537764?s=400&u=7a2e10e8023a50d7ff83931b8a6b2dab4203f08b&v=4"
                title="Alan Zurita"
             />
             <Story 
                image="https://scontent.faep16-1.fna.fbcdn.net/v/t31.0-8/13680285_1363465090334338_377141879342186055_o.jpg?_nc_cat=107&ccb=2&_nc_sid=e3f864&_nc_ohc=HlffOFa48ToAX-iql_i&_nc_ht=scontent.faep16-1.fna&oh=e2e39edf7efb5b5cccc37bd234e6a537&oe=603246F0"
                profileSrc="https://scontent.faep16-2.fna.fbcdn.net/v/t31.0-8/15937063_1566136796733832_6025016223017773636_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=FB628bKgXFcAX8Y3qR2&_nc_ht=scontent.faep16-2.fna&oh=578e158d91258c375bfab8b116b72ad3&oe=60333842" 
                title="Leo Noriega"
             />
             <Story 
                image="https://scontent.faep16-2.fna.fbcdn.net/v/t1.0-9/s1080x2048/105489963_10158356587072486_7167312324210483246_o.jpg?_nc_cat=105&ccb=2&_nc_sid=e3f864&_nc_ohc=51Wz7EoB18IAX8JXr-L&_nc_ht=scontent.faep16-2.fna&tp=7&oh=827d48e4e58752fb97fe6fdb70d7e147&oe=60405561"
                profileSrc="https://scontent.faep16-1.fna.fbcdn.net/v/t1.0-9/75610755_10157642822427486_4824154524392357888_o.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=uvNF9kCWzywAX_uW_A8&_nc_ht=scontent.faep16-1.fna&oh=304a38379dba283cec69dec5a8128430&oe=6040580C" 
                title="Leo Noriega"
             />
             <Story 
                image="https://scontent.faep16-1.fna.fbcdn.net/v/t31.0-8/27500890_1736136953112611_8308461550255844734_o.jpg?_nc_cat=106&ccb=2&_nc_sid=e3f864&_nc_ohc=f3rjOg-Q7UYAX_uKho3&_nc_ht=scontent.faep16-1.fna&oh=46941f770e5b879a489a2d80b7a7178c&oe=60413045"
                profileSrc="https://scontent.faep16-1.fna.fbcdn.net/v/t1.0-9/145540820_3912211575505127_5796465765626898572_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=qABSZ8ZXSNkAX-Yz3P5&_nc_ht=scontent.faep16-1.fna&oh=30c3f28a458fd1a7513a476a49c851c0&oe=603F241B" 
                title="Leo Noriega"
             />
        </div>
    )
}

import React from 'react';
import { DialogItem } from 'components';

import './Home.scss';

const Home = () => (
  <section className="home">
    <div className="dialogs">
      <DialogItem
        user={{
          fullname: 'Фёдор Достоевский',
          isOnline: false,
        }}
        unreaded={10}
      />
      <DialogItem
        user={{
          fullname: 'Фёдор Достоевский',
          isOnline: true,
        }}
        unreaded={0}
      />
      <DialogItem
        user={{
          fullname: 'Фёдор Достоевский',
          isOnline: false,
        }}
        unreaded={0}
      />
    </div>
    {/* <Dialogs
      items={[
        {
          user: {
            fullname: 'Фёдор Достоевкий',
            avatar: null,
          },
          message: {
            text: 'Мы все свидетельствуем вам глубочайшее наше почтение и целиуем ваши ручки, дражайший папаенька: Михайла, Федор, Варвара и Андрюша',
            isReaded: false,
            created_at: new Date(),
          },
        },
      ]}
    /> */}
    {/* <Message
      avatar="https://sun6-23.userapi.com/s/v1/ig2/6hJAFUGC_d_Zhs-W1F-qsPfIQ3_lo1BE2U0u10WR-oZulFLo9Dkl9GFnkDVH4P0G9sngzQGPaBID2omEhGB8rLDw.jpg?size=200x200&quality=96&crop=0,87,1242,1242&ava=1"
      text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
      date={new Date('Mon Aug 16 2021 16:09:57')}
      attachments={[
        {
          filename: 'image.jpg',
          url: 'https://source.unsplash.com/100x100/?random=1&nature,water',
        },
        {
          filename: 'image.jpg',
          url: 'https://source.unsplash.com/100x100/?random=2&nature,water',
        },
        {
          filename: 'image.jpg',
          url: 'https://source.unsplash.com/100x100/?random=3&nature,water',
        },
      ]}
    />
    <Message
      avatar="https://sun6-23.userapi.com/s/v1/ig2/6hJAFUGC_d_Zhs-W1F-qsPfIQ3_lo1BE2U0u10WR-oZulFLo9Dkl9GFnkDVH4P0G9sngzQGPaBID2omEhGB8rLDw.jpg?size=200x200&quality=96&crop=0,87,1242,1242&ava=1"
      text="Hello there 🖐🏻"
      date={new Date('Mon Aug 16 2021 16:15:57')}
      isMe={true}
      isReaded={false}
    />
    <Message
      avatar="https://sun6-23.userapi.com/s/v1/ig2/6hJAFUGC_d_Zhs-W1F-qsPfIQ3_lo1BE2U0u10WR-oZulFLo9Dkl9GFnkDVH4P0G9sngzQGPaBID2omEhGB8rLDw.jpg?size=200x200&quality=96&crop=0,87,1242,1242&ava=1"
      attachments={[
        {
          filename: 'image.jpg',
          url: 'https://source.unsplash.com/100x100/?random=1&nature,water',
        },
      ]}
    />
    <Message
      avatar="https://sun6-23.userapi.com/s/v1/ig2/6hJAFUGC_d_Zhs-W1F-qsPfIQ3_lo1BE2U0u10WR-oZulFLo9Dkl9GFnkDVH4P0G9sngzQGPaBID2omEhGB8rLDw.jpg?size=200x200&quality=96&crop=0,87,1242,1242&ava=1"
      isTyping
    /> */}
  </section>
);

export default Home;

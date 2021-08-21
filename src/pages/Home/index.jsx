import React from 'react';
import { Dialogs, Message } from 'components';

import './Home.scss';

const Home = () => (
  <section className="home">
    <Dialogs
      userId={0}
      items={[
        {
          _id: '0b63c4e574b64e2a9359be0340b1447b',
          text: '123Мы все свидетельствуем вам глубочайшее наше почтение и целиуем ваши ручки, дражайший папаенька: Михайла, Федор, Варвара и Андрюша',
          created_at: new Date('Thu Aug 2 2021 21:16:55'),
          user: {
            _id: '0b63c4e574b64e2a9359be0340b1447b',
            fullname: 'Макс Достоевксий',
            avatar:
              //   'https://sun6-23.userapi.com/s/v1/ig2/6hJAFUGC_d_Zhs-W1F-qsPfIQ3_lo1BE2U0u10WR-oZulFLo9Dkl9GFnkDVH4P0G9sngzQGPaBID2omEhGB8rLDw.jpg?size=200x200&quality=96&crop=0,87,1242,1242&ava=1',
              null,
          },
        },
        {
          _id: '763ba4579c747662ac975e48df1c9878',
          text: 'Привет, как твои дела?',
          created_at: new Date('Thu Aug 14 2021 21:16:55'),
          user: {
            _id: '763ba4579c747662ac975e48df1c9878',
            fullname: 'Алан Тьюринг',
            avatar:
              'data:image/jpeg;base64,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',
          },
        },
      ]}
    />

    <Message
      avatar="https://sun6-23.userapi.com/s/v1/ig2/6hJAFUGC_d_Zhs-W1F-qsPfIQ3_lo1BE2U0u10WR-oZulFLo9Dkl9GFnkDVH4P0G9sngzQGPaBID2omEhGB8rLDw.jpg?size=200x200&quality=96&crop=0,87,1242,1242&ava=1"
      date={new Date('Mon Aug 16 2021 16:09:57')}
      audio="https://notificationsounds.com/storage/sounds/file-de_vuvuzela-power-down.mp3"
    />

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

import React from 'react';

export default function City({ waterfront, castle, skyline }) {
  return (
    <div className="city">
      {/* this component should take 3 props: waterfrontId, skylineId, and castlId */}
      {/* use these 3 ids in img tags load approriate images that live in the public directory */}
      <section>
        <img src={`/${waterfront}.jpeg`} />
        <img src={`${skyline}.jpeg`} />
        <img src={`${castle}.jpeg`} />
      </section>
    </div>
  );
}

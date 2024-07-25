import React from 'react'

const WorkPage = () => {
  return (
    <div>WorkPage</div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      topImage: "/works.jpg",
      topText: "Works",
    },
  };
}

export default WorkPage
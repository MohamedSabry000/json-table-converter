import { useState } from 'react';
import Upload from '../../components/upload/Upload';
import { Wrapper } from './Home.styles';

const Home = () => {
  return (
    <Wrapper>
      <Upload />
    </Wrapper>
  )
}

export default Home;
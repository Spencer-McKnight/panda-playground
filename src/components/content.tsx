import React from 'react';
import styled from 'styled-components';

const Divider = styled.hr`
  border-top: '2px solid #EBEBEB';
  margin: '20px 0';
`;

const Wrapper = styled.div`
  background: '#F4F4F4';
  padding: '50px';
`;

const Content: React.FC = () => (
  <Wrapper>
    <h1>There are only 1,800 Giant Pandas remaining in the wild</h1>
    <p className="lead">
      Help us to save this beautiful animal by donating now.
    </p>
    <Divider />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nibh
      ac eros ultricies volutpat feugiat quis quam. In hac habitasse platea
      dictumst. Nulla felis ligula, egestas ac lectus quis, tincidunt vestibulum
      nisi. Sed vel dolor velit. Etiam nulla dolor, fringilla quis auctor in,
      facilisis non enim. Vivamus vulputate blandit sem, nec congue enim
      scelerisque vel. Sed pharetra neque sit amet viverra convallis. Curabitur
      tempor et orci eget porttitor. Nam malesuada aliquet tristique. Quisque ex
      est, lobortis non commodo eget, commodo et nibh. Nunc gravida, leo quis
      efficitur ultrices, lorem enim maximus nibh, at efficitur enim metus in
      sem. Curabitur at bibendum nulla.
    </p>
    <p>
      Vivamus eget nunc orci. Cras sodales gravida commodo. Morbi ut justo
      vestibulum, venenatis elit ultricies, cursus nisi. Suspendisse egestas
      auctor aliquam. Cras et finibus eros. Aliquam blandit ligula quis enim
      tincidunt malesuada. Duis placerat hendrerit erat eu suscipit. Ut magna
      tellus, efficitur id neque a, maximus placerat odio. Suspendisse porttitor
      iaculis nibh, vel tempor orci vulputate nec. Nullam ac mauris lectus.
    </p>
    <p>
      Maecenas consequat dapibus ipsum, sed placerat ipsum tincidunt vitae.
      Maecenas non hendrerit orci. Nunc quis ex finibus, mattis mi non, egestas
      tellus. Duis mi odio, pellentesque vel arcu quis, aliquam pretium lectus.
      Donec vulputate nulla eget varius cursus. Ut finibus velit vitae felis
      tincidunt, eu pellentesque nunc imperdiet. Donec eget neque vitae risus
      sagittis vehicula. Nulla ornare nisi quis tortor rhoncus, eu rutrum metus
      lacinia. Sed feugiat nibh risus, at dignissim libero facilisis sed.
      Suspendisse est quam, imperdiet ac quam id, convallis cursus erat. Nunc
      egestas metus a efficitur vulputate. Fusce fringilla nisi ex, ut vehicula
      erat condimentum id. Phasellus sit amet imperdiet quam. Curabitur
      tincidunt purus congue leo accumsan, id commodo nisi lobortis. Suspendisse
      sed lobortis dui, eget condimentum eros. Quisque ac condimentum dui, in
      feugiat arcu.
    </p>
  </Wrapper>
);

export default Content;

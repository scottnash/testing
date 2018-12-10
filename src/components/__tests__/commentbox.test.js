import React from 'react';
import CommentBox from 'components/commentbox';
import { mount } from 'enzyme';
import Root from 'root';

let wrapped;

beforeEach( ()=> {
   wrapped = mount( <Root><CommentBox /></Root> );
});

afterEach( ()=> {
  wrapped.unmount();
});

it('has a textarea and a button', ()=> {
  expect( wrapped.find( 'textarea' ).length ).toEqual( 1 );
  expect( wrapped.find( 'button' ).length ).toEqual( 1 );
});


describe('the text area', ()=> {
  let new_comment;

  beforeEach( ()=> {
   new_comment = "new comment";
   wrapped.find( 'textarea' ).simulate( 'change', {
     target: { value: new_comment }
   });
   wrapped.update();
  })

  it('has a textarea that users can type in', ()=> {
    expect( wrapped.find( 'textarea' ).prop( 'value' ) ).toEqual( new_comment );
  });

  it('textarea is cleared on submit', ()=> {
    wrapped.find( 'form' ).simulate( 'submit' );
    wrapped.update();
    expect( wrapped.find( 'textarea' ).prop( 'value' ) ).toEqual( '' );
  });
});

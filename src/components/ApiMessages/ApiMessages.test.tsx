import React from 'react';
import { render, screen } from '@testing-library/react';
import ApiMessages from './ApiMessages';

describe('ApiMessages Component', () => {

    it('Should output correct message when showMessage is set to TRUE', () => {

      render(<ApiMessages 
            showMessage={true} 
            cssClass='success' 
            message='Test Message'
        />);

        expect(screen.getByText(/Test Message/i)).toBeInTheDocument();
    });

    it('Should NOT output ANY message when showMessage is set to FALSE', () => {

        render(<ApiMessages 
              showMessage={false} 
              cssClass='success' 
              message='Test Message'
          />);
  
          expect(screen.queryByText(/Test Message/i)).not.toBeInTheDocument();
    });

    it('Should set the correct class on header message', () => {

        render(<ApiMessages 
              showMessage={true} 
              cssClass='fail' 
              message='Test Message'
          />);

        const header = screen.getByRole('heading', { level: 3 });
        const className = header.getAttribute('class');
        expect(className).toBe('fail')
    });
})

import { render, screen } from '@testing-library/react';
import { mockContentEntry } from '../../mockData/mockData';
import BoxedContent from './BoxedContent';
import { IContentEntry } from '../../types/contentfulTypes';

describe('BoxedContent Component', () => {
    const testContent = mockContentEntry as IContentEntry;

    it('Should output a Title and Text when there is content', ()=>{
        render(<BoxedContent contentEntry={testContent}/>);
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/DJ X-ITE/i);
        expect(screen.getByText('The Story so far ...')).toBeInTheDocument();
    })

    it('Should NOT output a Title and Text when there is NO content', ()=>{
        render(<BoxedContent contentEntry={undefined}/>);
        expect(screen.queryByRole('heading', { level: 1 })).toBe(null);
        expect(screen.queryByText('The Story so far ...')).not.toBeInTheDocument();
    })

});
import { fireEvent, render, screen } from '@testing-library/react';
import { singularMixItem } from '../../mockData/mockData';
import MixTapeDetails from './MixTapeDetails';

describe('MixTapeDetails Component', () => {
    it('Should show details of a single mix tape', () => {
        const mockPlayMixFn = jest.fn();
        const mockSendMixCount = jest.fn();

        render(<MixTapeDetails mixItem={singularMixItem} itemIndex={0} playMix={mockPlayMixFn} sendMixCount={mockSendMixCount}/>);

        const button = screen.getByTestId('play-button')
        fireEvent.click(button);

        expect(screen.getByRole('heading', {level: 2})).toHaveTextContent('Test Mix Tape Title');
        expect(mockPlayMixFn).toHaveBeenCalledTimes(1);
        expect(mockSendMixCount).toHaveBeenCalledTimes(1);

    })
})
import { fireEvent, render, screen } from '@testing-library/react';
import { singularMixItem } from '../../mockData/mockData';
import MixTapeLogo from './MixTapeLogo';

describe('MixTapeLogo Component', () => {
    const mockPlayMix = jest.fn();
    const mockSendMixCount = jest.fn();

    it('Should render a Mix Tape image', () => {
        render(<MixTapeLogo mixItem={singularMixItem} itemIndex={0} playMix={mockPlayMix} sendMixCount={mockSendMixCount}/>);

        expect(screen.getByRole('img')).toBeInTheDocument();
        expect(screen.getByRole('img').getAttribute('src')).toBe(singularMixItem.mixTapeImageUrl);
    })

    it('Should trigger a play function when clicking the play Icon Button and trigger the sendMixCount() function', () => {

        render(<MixTapeLogo mixItem={singularMixItem} itemIndex={0} playMix={mockPlayMix} sendMixCount={mockSendMixCount}/>);

        fireEvent.click(screen.getByRole('button'))
        expect(mockPlayMix).toHaveBeenCalledTimes(1);
        expect(mockSendMixCount).toHaveBeenCalledTimes(1);
    })
})

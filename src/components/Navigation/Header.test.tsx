import { fireEvent, render, screen } from '@testing-library/react';
import Navigation from './Navigation';


describe('Header Component', () => {

    const mockFucntion = jest.fn();

    it('Should show nav Items', () => {
        render(<Navigation linkToSection={mockFucntion}  />);
        expect(screen.getAllByRole('listitem')).toHaveLength(4);
    })

    it('Should be able to click a list item and fire a navigational function', () => {
        render(<Navigation linkToSection={mockFucntion}  />);
    
        fireEvent.click (screen.getAllByRole('listitem')[0]);
        expect(mockFucntion).toHaveBeenCalledTimes(1);

    })
})
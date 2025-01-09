import { render, screen } from '@testing-library/react';
import Header from './Header';


describe('Header Component', () => {
    it('Should show nav Items', () => {
        render(<Header />);
        expect(screen.getAllByRole('listitem')).toHaveLength(5);
    })
})
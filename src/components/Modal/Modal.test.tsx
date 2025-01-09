import { fireEvent, render, screen } from '@testing-library/react';
import Modal from './Modal';
import { ModalContext } from '../../context/ModalProvider/modalContext';

describe('Modal Component', () => {
    const MockComponent = () => <><p>Test Child Component</p></>


    const providerValues = {
        modalToggle: false, 
        setModalToggle: jest.fn()
    }

    it('Should render with an another compoment wrapped with the Modal', () => {
        render(
            <ModalContext.Provider value={providerValues}>
                <Modal>
                    <MockComponent />
                </Modal>
            </ModalContext.Provider>
            );

        expect(screen.getByText('Test Child Component')).toBeInTheDocument();
    })

    it('Should be able to click the Close Icon Button', () => {
        render(
            <ModalContext.Provider value={providerValues}>
                <Modal>
                    <MockComponent />
                </Modal>
            </ModalContext.Provider>
        );

        fireEvent.click(screen.getByRole('button'));
        expect(providerValues.setModalToggle).toHaveBeenCalledTimes(1);
    })

})

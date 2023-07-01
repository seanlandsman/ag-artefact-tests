import App from './App.tsx';
import '@testing-library/jest-dom'
import {render} from '@testing-library/react';

describe(`App test`, function () {
    it(`should render grid without any issues`, function () {
        const result = render(<App/>);
        expect(result.getByRole('grid')).toBeInTheDocument();
    });
});

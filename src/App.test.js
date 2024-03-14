import { fireEvent, render, screen } from '@testing-library/react';  // screen -->document or webpage 
import App from './App';

// simple jest cases
// describe('My Test Suite', () => {

//   test('Test-case-1', () => {
//     render(<App />);
//     var test1 = screen.getByText('WELCOME TO JEST DEMO PROJECT');
//     expect(test1).toBeInTheDocument();//checks if the element is present in DOM

//   });


//   test('Test-case-2', () => {
//     render(<App />);
//     var test2 = screen.getByText('James Bond');
//     expect(test2).toBeInTheDocument();//check if the element is present in the screen or not 
//   });

//   test('Test-By-Id', () => {
//     render(<App />);
//     var test3 = screen.getByTestId('MyHeading');
//     expect(test3).toBeInTheDocument();  // verify elemeent in the document or not 
//     expect(test3).toHaveTextContent('WELCOME TO JEST DEMO PROJECT');

//   })

// });



describe('My Calculator Test Suite', () => {

  test('Test Case-1[Render  All UI]', () => {
    render(<App />)
    var textbox1 = screen.getByTestId("TextBox1");
    var textbox2 = screen.getByTestId("TextBox2");
    var additionbutton = screen.getByTestId("AdditionButton");

    expect(textbox1).toBeInTheDocument();
    expect(textbox2).toBeInTheDocument();
    expect(additionbutton).toBeInTheDocument();
  });


  // fireEvent.change(screen.getByTestId('TextBox1'),{target:{value:"5"}});
  // fireEvent.change(screen.getByTestId('TextBox2'),{target: { value: "3" }});
  // fireEvent.click(screen.getByTestId('AdditionButton'));
  // expect(screen.getByText('sum is : 8')).toBeInTheDocument();

  test('Test case-2[Rendring All Elements]', () => {
    render(<App />);
    const heading = screen.getByTestId('Heading');
    const label1 = screen.getByTestId('Label1');
    const label2 = screen.getByTestId('Label2');
    const result = screen.getByTestId('Result');

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Addtion of Two Numbers');

    expect(label1).toBeInTheDocument();
    expect(label1).toHaveTextContent('Enter number 01:');

    expect(label2).toBeInTheDocument();
    expect(label2).toHaveTextContent('Enter number 02:');

    expect(result).toBeInTheDocument();
    expect(result).toHaveTextContent('sum is :');
  });

  test('Test case-3[Testing the TextBoxes initial value]', () => {
    render(<App />);

    const textbox1 = screen.getByTestId("TextBox1");
    const textbox2 = screen.getByTestId("TextBox2");
    
    expect(textbox1).toHaveTextContent('');
    expect(textbox2).toHaveTextContent('');

  });

  test('Test case-4 [Test the Button without Any input]', () => {
    render(<App />);

    const additionbutton = screen.getByTestId('AdditionButton');
    const result = screen.getByTestId('Result');

    expect(additionbutton).toBeInTheDocument();

    fireEvent.click(additionbutton);

    expect(result).toHaveTextContent('NaN');

  });

  test('Test case-5 [Test the button with input value', () => {
    render(<App />)

    const textbox1 = screen.getByTestId("TextBox1");
    const textbox2 = screen.getByTestId("TextBox2");
    const additionbutton = screen.getByTestId("AdditionButton");



    fireEvent.change(textbox1, { target: { value: "5" } });
    fireEvent.change(textbox2, { target: { value: "3" } });
    fireEvent.click(additionbutton);


    const result = screen.getByTestId('Result');

    expect(result).toHaveTextContent('8');

  });

})



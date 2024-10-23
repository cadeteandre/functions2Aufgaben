const button = document.querySelector('button') as HTMLButtonElement;

type NewCustomer = {
    firstName: string,
    lastName: string,
    email?: string,
    phone?: string
}

const greetNewUser1 = (customer: NewCustomer) => {
    const customerName: string = `${customer.firstName} ${customer.lastName}` 
    
    if(!customer.email && !customer.phone) {
        return `Hello ${customerName}. We will not contact you`;
    } else if(!customer.email){
            return `Hello ${customerName}. We will contact you via ${customer.phone}`; 
        } else if(!customer.phone) {
            return `Hello ${customerName}. We will contact you via ${customer.email}`;
        } else {
            return `Hello ${customerName}. We will contact you via ${customer.email} and ${customer.phone}`;
        }
    } 

const greetNewUser2 = (firstName: string, lastName: string, email: string, phone: string) => {
    const customerName: string = `${firstName} ${lastName}`;

    if(!email && !phone) {
        return `Hello ${customerName}. We will not contact you`;
    } else if(!email){
            return `Hello ${customerName}. We will contact you via ${phone}`; 
        } else if(!phone) {
            return `Hello ${customerName}. We will contact you via ${email}`;
        } else {
            return `Hello ${customerName}. We will contact you via ${email} and ${phone}`;
        }
} 

button.addEventListener('click', () => {
    const firstName = document.querySelector('#firstName') as HTMLInputElement;
    const lastName = document.querySelector('#lastName') as HTMLInputElement;
    const email = document.querySelector('#email') as HTMLInputElement;
    const phone = document.querySelector('#phone') as HTMLInputElement;
    const showResults = document.querySelector('#showResults') as HTMLElement;
    
    const newCustomer: NewCustomer = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value
    }

    console.log(greetNewUser1(newCustomer));
    showResults.innerHTML = greetNewUser2(firstName.value, lastName.value, email.value, phone.value);
})
// Original dog object defined using object literal syntax
const myDog = {
    fullName: 'Cosmo the Space Dog',
    breed: 'Golden Retriever',
    tvProgram: 'Guardians of the Galaxy',
    notes: 'a telepathic Soviet dog who is the security chief of the space station Knowhere and a member of the Guardians',

    mySound: 'I sound strong and courageous',

    // Method to describe the dog
    describe() {
        return `Hello, my name is ${this.fullName}, when I bark ${this.mySound}. I starred in the tv show ${this.tvProgram}. My character was a ${this.breed}. I was ${this.notes}. `;
    }
};

// Function to display the description of the original dog object in HTML
function displayMyDog() {
    document.getElementById('my-dog').innerText = myDog.describe();
}

// Constructor function to create a Dog object with specific properties
function Dog(fullName, breed, tvProgram, notes, canTalk, mySound) {
    this.fullName = fullName;
    this.breed = breed;
    this.tvProgram = tvProgram;
    this.notes = notes;
    this.canTalk = canTalk;
    this.mySound = mySound;

    // Method to return a greeting including all properties of the dog
    this.myGreeting = function() {
        return `Hello, my name is ${this.fullName}. When I bark, ${this.mySound}. I starred in the TV show ${this.tvProgram}. My character was a ${this.breed}. I was ${this.notes}. Can I talk? ${this.canTalk ? 'Yes, I can talk!' : 'No, I cannot talk.'}`;
    };
}

// Creating instances of the Dog object using the constructor
const myDogConst = new Dog(
    'Astro',
    'Great Dane',
    'The Jetsons',
    'the family dog in a cartoon about a family in the future',
    true,
    'I am not scary'
);

// Function to display the greeting of the created Dog instance in HTML
function displayMyDogConst() {
    document.getElementById('my-dog-const').innerText = myDogConst.myGreeting();
}

// Creating more instances of the Dog object
const dog1 = new Dog(
    'Sparky',
    'Generic',
    'South Park',
    'Stan\'s dog; about bizarre adventures of four boys',
    true,
    'I sound super fun!'
);

const dog2 = new Dog(
    'Santas Little Helper',
    'Greyhound',
    'The Simpsons',
    'the family dog.',
    false,
    'I am silly sounding!'
);

// Function to build a string containing all properties of the dog object
function displayDogInfo(dog) {
    let info = '';
    for (let key in dog) {
        if (dog.hasOwnProperty(key) && key !== 'myGreeting') { // Exclude the method from the output
            info += `${key}: ${dog[key]} \n`; // Append the property name and value to the string
        }
    }
    return info;
}

// Function to prompt the user to select a dog and display its information
function selectDog() {
    const dogName = prompt("Enter the name of the dog (Sparky or Santas Little Helper): ");
    let selectedDog;

    // Switch statement to select the dog based on user input
    switch (dogName) {
        case 'Sparky':
            selectedDog = dog1;
            break;
        case 'Santas Little Helper':
            selectedDog = dog2;
            break;
        default:
            alert('The dog you selected does not exist.'); // Alert if the dog is not found
            return;
    }

    // Display the information and greeting of the selected dog
    document.getElementById('dog-info').innerText = displayDogInfo(selectedDog) + '\n' + selectedDog.myGreeting();
}

// Event handler for when the window loads to display initial information and prompt user
window.onload = function() {
    displayMyDog(); // Display information of the original dog object
    displayMyDogConst(); // Display information of the created Dog instance
    selectDog(); // Prompt the user to select a dog and display its information
};

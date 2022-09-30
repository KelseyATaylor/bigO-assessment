// 1) Sum Zero

const sumZero = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++)
			if (arr[i] + arr[j] === 0) {
				return true;
			} else {
				return false;
			}
	}
};

// console.log(sumZero([1, 2, 3, -2]));
//Time Complexity - not positive why this doesn't work. But, it would be an O(n^2) complexity because you have two for loops running through arrays of any given length.

function sumFinder(arr, num) {
	let obj = {};
	let diff;

	for (let i = 0; i < arr.length; i++) {
		diff = num - arr[i];

		if (obj[diff]) {
			return true;
		} else {
			obj[arr[i]] = true;
		}
	}
	return false;
}

// console.log(sumFinder([1, 2, 3, -2], 0));
// returns true

//Time Complexity - This would be a complexity of O(n) because there is one for loop with a .length - we don't know how long the array could be.

//Space Complexity - Linear Space O(n) - The length of the array will determine amount of space taken up

// 2) Unique Characters

function hasUniqueChars(word) {
	let wordArr = word.split("");

	for (i = 0; i < wordArr.length; i++) {
		for (k = 0; k < wordArr.length; k++) {
			if (i !== k && wordArr[i] === wordArr[k]) {
				return false;
			}
		}
	}
	return true;
}

// console.log(hasUniqueChars("supercaliff"));

//Time Complexity - This would be an O(n^2) time complexity because two for loops with a .length parameter means it has to run as many times as the word is long. (although, I guess you could argue that if you passed in the longest word in the english dictionary that it would eventually end, therefore being O(n)). Seems more like O(n^2) though :)

//Space Complexity - Linear O(n) - The length of the word will determine space

// 3) Pangram Sentence

const pangramChecker = (sentence) => {
	let sentenceArray = sentence.split("");

	for (let i = 0; i < sentence.length; ) {
		//return to this idea later
	}
};

const str = "We promptly judged antique ivory buckles for the next prize";
const isPangram = (str = "") => {
	str = str.toLowerCase();
	const { length } = str;
	const alphabets = "abcdefghijklmnopqrstuvwxyz";
	const alphaArr = alphabets.split("");
	for (let i = 0; i < length; i++) {
		const el = str[i];
		const index = alphaArr.indexOf(el);
		if (index !== -1) {
			alphaArr.splice(index, 1);
		}
	}
	return !alphaArr.length;
};
// console.log(isPangram(str));

//Time Complexity - This appears to be a O(1) because it will only iterate through as long as the sentence and the alphabet. (Although I guess I could argue that your sentence could be humongous,making it O(n) but then that would be poor english. So, it's it's not a dumb sentence, then it should be O(1).

//Space Complexity - Constant Space O(1) - I guess the sentence could be giant, but it should still end in a fairly reasonable amount of time, making this only contain a finite amount of data.

//4) Longest Word

function findLongestWord(str) {
	var words = str.split(" ");
	var longest = "".split("");
	for (var i = 0; i < words.length; i++) {
		if (words[i].length > longest.length) {
			longest = words[i];
		}
	}
	return longest + ", " + longest.length;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

//Time Complexity - This would be a O(n) - is has a for loop that iterates through a string that, because it's .length, could be infinitely long.

//Space Complexity - O(1) - there is a finite amount of data in any sentence.

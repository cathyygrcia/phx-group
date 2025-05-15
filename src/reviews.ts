export type Reviews = {
  image: string;
  review: string;
  signature: string;
  title: string;
};

export const reviews: Reviews[] = [
  {
    image: "/images/delmar.png",
    review:
      "When the competition starts recommending you and the overwhelming  consensus among the customer is that Phoenix Group does the best job, it is a closed case",
    signature: "- Eric Sandy",
    title: "Parking Sergeant",
  },
  {
    image: "/images/sangabriel.jpg",
    review: "Good job to you and your staff...it is really nice to see the effort being put into making this transition run so smooth and making the process relatively painless (at least on our side.) Thanks",
    signature: "- Darren Perrine",
    title: "Police Lieutenant"
  },
  {
    image: "/images/sanluisobispo.jpeg",
    review: "You all do such a great job. You make changes based on customer input, which is so rare these days. This transition was easy and the software was intuitive for our officers.",
    signature: "- Robert Horch",
    title: "Parking Service Manager"
  },
  {
    image: "/images/hollister.png",
    review: "Great updates and service. They are always pleasant and helpful and callback promptly when needed.",
    signature: "- Eva Foster",
    title: "Hollister Police Department"
  },
/*
{
  image: "/images/fresno.jpeg",
  review: "Your staff has always been extremely helpful. They are very courteous and professional.",
  signature: "- Armando Hindman",
  title: "County of Fresno"
}
*/

];

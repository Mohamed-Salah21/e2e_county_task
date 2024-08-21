interface ReviewI {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface ProductI {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  images: string[];
  reviews: ReviewI[];
}

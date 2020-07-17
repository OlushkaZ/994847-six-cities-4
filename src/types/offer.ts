import {Review} from "./review";

export interface OfferHost {
  hostName: string;
  photo: string;
  isSuper: boolean;
}

export interface OfferLocation {
  city: string;
  cityCoordinates: [number, number];
}

export interface Offer {
  id: number;
  coordinates: [number, number];
  location: OfferLocation;
  host: OfferHost;
  name: string;
  img: string;
  imgDetails: string[];
  price: number;
  rating: number;
  ratingDetails: number;
  type: string;
  isPremium: boolean;
  isBookmark: boolean;
  description: string[];
  roomCountDetails: number;
  maxGuestsDetails: number;
  featuresDetails: string[];
  reviews: Review[];
}

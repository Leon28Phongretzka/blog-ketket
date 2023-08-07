export interface Post {
    author: {
        name: string;
    }
    title: string;
    body: any;
    slug: {
        current: string;
    }
    _id: string;
    _createdAt: string;
    mainImage: {
        asset: {
            _ref: string;
            _type: string;
        }
        alt: string;
    }
}


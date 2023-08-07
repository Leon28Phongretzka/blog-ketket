export interface Post {
    author: {
        name: string;
    }
    title: string;
    body: string;
    slug: {
        current: string;
    }
    _id: string;
    _createdAt: string;
    mainImage: {
        asset: {
            url: string;
        }
        alt: string;
    }
}


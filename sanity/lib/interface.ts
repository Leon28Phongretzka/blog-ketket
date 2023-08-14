export interface Post {
    label: string;
    _id: string;
    title: string;
    author: {
        name: string;
        image: {
            asset: {
                _ref: string;
                _type: string;
            }
        }
    }
    body: any;
    slug: {
        current: string;
    }
    _createdAt: string;
    mainImage: {
        asset: {
            _ref: string;
            _type: string;
        }
        alt: string;
    };
    description: string;
    categories: {
        categoryTitle: string;
    };
}


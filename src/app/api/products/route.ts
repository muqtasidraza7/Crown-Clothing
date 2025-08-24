import { NextResponse } from "next/server";

export async function GET() {
  const products = {
    men: [
      { id: 1, image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&auto=format&fit=crop", title: "Classic White Shirt", price: 30 },
      { id: 2, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&auto=format&fit=crop", title: "Slim Fit Jeans", price: 45 },
      { id: 3, image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&auto=format&fit=crop", title: "Casual Polo", price: 28 },
      { id: 4, image: "https://i.pinimg.com/1200x/c3/2e/90/c32e902b685c6605b921f0a3497382a5.jpg", title: "Black Hoodie", price: 50 },
      { id: 5, image: "https://i.pinimg.com/1200x/3f/88/a8/3f88a8e15761c1563edd683a2d972158.jpg", title: "Denim Jacket", price: 60 },
      { id: 6, image: "https://i.pinimg.com/1200x/ee/84/e9/ee84e974114215cadb50384fdd363448.jpg", title: "Formal Trousers", price: 55 },
      { id: 7, image: "https://i.pinimg.com/1200x/18/9d/b6/189db684a7df3fc20e22518a2a719f5a.jpg", title: "Leather Belt", price: 20 },
      { id: 8, image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&auto=format&fit=crop", title: "Graphic Tee", price: 22 },
      { id: 9, image: "https://i.pinimg.com/1200x/17/45/d0/1745d013a59dc901219e90c3e4b1c785.jpg", title: "Running Shorts", price: 25 },
      { id: 10, image: "https://i.pinimg.com/1200x/ea/6e/41/ea6e418d22c37c27afb0be80c695cb12.jpg", title: "Winter Sweater", price: 48 },
    ],
    women: [
      { id: 11, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop", title: "Red Dress", price: 70 },
      { id: 12, image: "https://i.pinimg.com/1200x/b9/4c/ef/b94cef3887b076e597ce9f5b5daebe32.jpg", title: "Blue Denim Jacket", price: 65 },
      { id: 13, image: "https://i.pinimg.com/1200x/b5/62/d0/b562d0c19820fd6812ef05471470d129.jpg", title: "Floral Top", price: 32 },
      { id: 14, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop", title: "Skinny Jeans", price: 50 },
      { id: 15, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop", title: "Leather Handbag", price: 80 },
      { id: 16, image: "https://i.pinimg.com/736x/6f/13/e2/6f13e2fcea8a4abf61a8352dfc2d921d.jpg", title: "Maxi Skirt", price: 45 },
      { id: 17, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&auto=format&fit=crop", title: "Wool Coat", price: 95 },
      { id: 18, image: "https://i.pinimg.com/1200x/1e/45/e7/1e45e752c5dbc9c56950cd1021575c8e.jpg", title: "White Sneakers", price: 55 },
      { id: 19, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&auto=format&fit=crop", title: "Crop Hoodie", price: 40 },
      { id: 20, image: "https://i.pinimg.com/1200x/69/53/b2/6953b20e72622db6e1ca988b05180d37.jpg", title: "Tank Top", price: 20 },
    ],
    jackets: [
      { id: 21, image: "https://i.pinimg.com/736x/2a/3c/7d/2a3c7d590f97b81d39e113e298452e8f.jpg", title: "Bomber Jacket", price: 85 },
      { id: 22, image: "https://i.pinimg.com/1200x/b6/9c/ac/b69cac88b17ea24ee415440f53f7613c.jpg", title: "Leather Jacket", price: 120 },
      { id: 23, image: "https://i.pinimg.com/1200x/3f/88/a8/3f88a8e15761c1563edd683a2d972158.jpg", title: "Denim Jacket", price: 70 },
      { id: 24, image: "https://i.pinimg.com/736x/a5/11/bc/a511bc1e91ef575c4da4cbe56a17e41b.jpg", title: "Puffer Jacket", price: 110 },
      { id: 25, image: "https://i.pinimg.com/1200x/80/7a/df/807adf0d8c0cdcaaa1f0cd3d2b0678f9.jpg", title: "Varsity Jacket", price: 95 },
      { id: 26, image: "https://i.pinimg.com/736x/2f/c5/1f/2fc51f57de79a77fd0d0197bdab63e7c.jpg", title: "Trench Coat", price: 130 },
      { id: 27, image: "https://i.pinimg.com/1200x/3a/00/82/3a008243a19257f41cd42f59a37861f6.jpg", title: "Blazer", price: 90 },
      { id: 28, image: "https://i.pinimg.com/1200x/86/6c/7e/866c7ee70ade6046f7fdec41d179a9f4.jpg", title: "Quilted Jacket", price: 100 },
      { id: 29, image: "https://i.pinimg.com/1200x/29/de/58/29de588bf040bcfbd6ccb2cfccd06f56.jpg", title: "Rain Jacket", price: 75 },
      { id: 30, image: "https://i.pinimg.com/736x/0e/7e/c8/0e7ec8d96bf4303b83e6e3e35192fc4a.jpg", title: "Fleece Jacket", price: 65 },
    ],
    sneakers: [
      { id: 31, image: "https://i.pinimg.com/1200x/06/98/a5/0698a5800c2e07e39ac2b0fafbfbb379.jpg", title: "Air Max 90", price: 120 },
      { id: 32, image: "https://i.pinimg.com/736x/0a/93/fd/0a93fd986ab314f66f76d7ea061f37bc.jpg", title: "Adidas Ultraboost", price: 140 },
      { id: 33, image: "https://i.pinimg.com/1200x/ad/12/6b/ad126bf9f0b4b67c654d77482c20b50f.jpg", title: "Converse All Star", price: 70 },
      { id: 34, image: "https://i.pinimg.com/1200x/78/72/65/787265628f6bed641d4fd4e4e08565ae.jpg", title: "Nike Dunk Low", price: 130 },
      { id: 35, image: "https://i.pinimg.com/736x/1e/a5/a7/1ea5a7c3e61b111ac46778b788c517c8.jpg", title: "Yeezy 350", price: 200 },
      { id: 36, image: "https://i.pinimg.com/736x/22/9d/91/229d91f13e2307aeea7ef85fd1541583.jpg", title: "New Balance 550", price: 110 },
      { id: 37, image: "https://i.pinimg.com/736x/0b/7a/3f/0b7a3f3b20ae5305a2457d072ec4cd86.jpg", title: "Jordan 1 High", price: 180 },
      { id: 38, image: "https://i.pinimg.com/1200x/a4/d8/f7/a4d8f761b54994fd5584a0ff57112f71.jpg", title: "Reebok Classic", price: 90 },
      { id: 39, image: "https://i.pinimg.com/736x/38/85/3e/38853ef720ea6ac891631d55dea96bec.jpg", title: "Asics Gel Kayano", price: 150 },
      { id: 40, image: "https://i.pinimg.com/1200x/5a/ce/23/5ace2392810e84fa4f3d5f81def885ef.jpg", title: "Puma RS-X", price: 100 },
    ],
    hats: [
      { id: 41, image: "https://i.pinimg.com/1200x/57/ec/d1/57ecd183bb9d663954a6f1e7f47b464f.jpg", title: "Brown Brim", price: 25 },
      { id: 42, image: "https://i.pinimg.com/736x/40/26/c6/4026c6530b0a83b1dd1a03aa28f880b7.jpg", title: "Blue Beanie", price: 18 },
      { id: 43, image: "https://i.pinimg.com/1200x/6f/db/28/6fdb28712db7bd8a5d4a74cf1f7b8cb9.jpg", title: "Cowboy Hat", price: 35 },
      { id: 44, image: "https://i.pinimg.com/1200x/22/96/5d/22965d5cac700af72cdc548925239266.jpg", title: "Grey Brim", price: 25 },
      { id: 45, image: "https://i.pinimg.com/736x/e1/bf/f8/e1bff8f8577e00bd275428d81875ebce.jpg", title: "Black Snapback", price: 30 },
      { id: 46, image: "https://i.pinimg.com/1200x/ba/67/3b/ba673b6ab68f67295410a16ba0a75cf8.jpg", title: "Red Baseball Cap", price: 22 },
      { id: 47, image: "https://i.pinimg.com/736x/17/66/ff/1766ff36b8fd983ec079239ee227488a.jpg", title: "Bucket Hat", price: 28 },
      { id: 48, image: "https://i.pinimg.com/1200x/f8/fa/ba/f8fabae4df81e6154985e64e7d5c8df0.jpg", title: "Wool Fedora", price: 40 },
      { id: 49, image: "https://i.pinimg.com/1200x/c2/34/3a/c2343ada4eec48589c1b234fc67a8855.jpg", title: "White Trucker Cap", price: 20 },
      { id: 50, image: "https://i.pinimg.com/1200x/3c/0b/e4/3c0be4982f02abf823b90353cc30fd91.jpg", title: "Green Beanie", price: 18 },
    ],
  };

  return NextResponse.json(products);
}
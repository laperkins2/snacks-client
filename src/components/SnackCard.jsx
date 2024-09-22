import Image from 'next/image';

export default function SnackCard({ snack }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* <Image src={snack.image} alt={snack.name} layout="fill" objectFit="cover" /> */}
      <h2 className="text-gray-800 text-lg font-semibold p-2">{snack?.name}</h2>
      <p className="text-gray-800 text-sm p-2">{snack?.description}</p>
      <p className="text-gray-800 text-sm p-2">{snack?.price}</p>
      <p
        className={`text-gray-800 text-sm p-2 ${
          snack?.inStock ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {snack?.inStock ? 'In Stock' : 'Out of Stock'}
      </p>
    </div>
  );
}

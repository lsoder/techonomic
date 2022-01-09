import Link from 'next/link';

const MyCustom404Page = (props) => {
  return (
    <div
      style={{
        marginTop: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>404</h1>
      <h2>
        <Link href="/">
          <a style={{ color: 'blue', textDecoration: 'underline' }}>
            Go To Home Page
          </a>
        </Link>
      </h2>
      <p>HÄR GÖR VI EN SNYGG 404-SIDA!!!!</p>
    </div>
  );
};

export default MyCustom404Page;
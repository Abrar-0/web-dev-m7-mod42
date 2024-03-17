import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className="flex justify-between items-center mt-12 max-w-6xl mx-auto border-b-2 py-8">
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;

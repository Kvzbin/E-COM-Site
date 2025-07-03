const ProfilePage = () => {
    const { user } = useAuth();
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h1 className="text-2xl font-bold mb-4">Profile</h1>
          <p><strong>Name:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>
        </div>
      </div>
    );
  };
  export default ProfilePage;
  
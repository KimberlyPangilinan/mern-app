import asyncHandler from 'express-async-handler'

// @desc    Auth user/ set token
// @route    POST /api/users/auth
const authUser = asyncHandler(async(req, res) => {
    res.status(401);
    throw new Error('Unauthorized')
    res.status(200).json({ message: 'Auth User' })
});

// @desc    Logout user
// @route    POST /api/users/logout
const logoutUser = asyncHandler(async(req, res)=> {
    res.status(200).json({ message: 'Logout user'})
})

// @desc    Register user
// @route    POST /api/users
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Register user' })
});

// @desc    Get user profile
// @route    GET /api/users/profile
const getUserProfile = asyncHandler(async(req, res) => {
    res.status(200).json({ message: 'Get user profile' })
});

// @desc    Update user profile
// @route   PUT /api/users/profile
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Update user profile'})
});

export { authUser, logoutUser, registerUser, getUserProfile, updateUserProfile };
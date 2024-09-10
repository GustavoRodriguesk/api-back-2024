import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// List all users
export const listUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
};

// Get a user by ID
export const getByIdUser = async (id) => {
    const user = await prisma.user.findUnique({
        where: {
            id
        }
    });
    return user;
};

// Create a new user
export const createUser = async (userData) => {
    const result = await prisma.user.create({
        data: userData
    });
    return result;
};

// Delete a user by ID
export const deleteUser = async (id) => {
    const user = await prisma.user.delete({
        where: {
            id
        }
    });
    return user;
};

// Update a user
export const updateUser = async (userData) => {
    const result = await prisma.user.update({
        where: {
            id: userData.id
        },
        data: userData
    });
    return result;
};

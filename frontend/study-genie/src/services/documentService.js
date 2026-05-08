import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";

const getDocument = async () => {
    try {
        const response = await axiosInstance.get(API_PATHS.DOCUMENT.GET_DOCUMENT);
        return response.data?.data;
    } catch (error) {
        throw error.response?.data || { message: "Failed to fetch document" }
    }
};

const uploadDocument = async (formData) => {
    try {
        const response = await axiosInstance.post(API_PATHS.DOCUMENT.UPLOAD_DOCUMENT, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Failed to upload document" }
    }
};

const deleteDocument = async (id) => {
    try {
        const response = await axiosInstance.delete(API_PATHS.DOCUMENT.DELETE_DOCUMENT(id));
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Failed to delete document" }
    }
};

const getDocumentById = async (id) => {
    try {
        const response = await axiosInstance.get(API_PATHS.DOCUMENT.GET_DOCUMENT_BY_ID(id));
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Failed to fetch document details" }
    }
};

const documentService = {
    getDocument,
    uploadDocument,
    deleteDocument,
    getDocumentById
};

export default documentService;
import axios from "axios";

const tenantId = process.env.NEXT_PUBLIC_TENANT_ID;
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosClient = axios.create({
  baseURL: baseURL,
});

const todoRequests = {
  item: `/${tenantId}/items`,
  itemDetailsModifyDelete: `/${tenantId}/items`,
  imageUpload: `/${tenantId}/images/upload`,
};

/** 항목 등록 */
export const addTodoAPI = (name: string) =>
  axiosClient.post(todoRequests.item, {
    name,
  });

/** 항목 조회 */
export const itemQueryAPI = (page: number) => {
  return axiosClient.get(`${todoRequests.item}?page=${page}`);
};

/** 항목 수정 */
export const modifyTodoAPI = (itemId: number, updateData: any) => {
  return axiosClient.patch(
    `${todoRequests.itemDetailsModifyDelete}/${itemId}`,
    updateData
  );
};

/** 항목 상세 조회 */
export const todoDetailAPI = (itemId: number) => {
  return axiosClient.get(`${todoRequests.itemDetailsModifyDelete}/${itemId}`);
};

/** 항목 삭제 */
export const todoDeleteAPI = (itemId: number) => {
  return axiosClient.delete(
    `${todoRequests.itemDetailsModifyDelete}/${itemId}`
  );
};

/** 이미지 등록 */
export const imageUploadAPI = (formData: FormData) => {
  return axiosClient.post(`${todoRequests.imageUpload}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

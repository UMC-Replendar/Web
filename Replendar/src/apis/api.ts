const API_BASE_URL = 'https://api.replednar.site';

export async function createTask(taskData: any, token: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/assignment`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`, // 서버 접근 시 토큰 포함
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    });

    if (!response.ok) {
      throw new Error('과제 등록 실패');
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

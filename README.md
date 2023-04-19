# kafka-example

docker compose를 사용한 single node kafka 예제


# 2023-04-19

![image](https://user-images.githubusercontent.com/67408890/233030309-f4ecbda4-b707-4447-b01f-02f68997879e.png)
![image](https://user-images.githubusercontent.com/67408890/233030515-0ff228e7-1329-4149-8a3d-d96c4df9a5a9.png)

동일한 파티션 내에서는 offset으로 순서를 보장하지만 다른 파티션 끼리는 순서를 보장하지 않는다.

-> key를 설정해줌으로 같은 파티션으로 전송해줄 수 있다.

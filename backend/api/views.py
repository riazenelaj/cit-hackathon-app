from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import status
from .serializers import JobSerializer, JobCreateSerializer
from .models import Job


class Home(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [AllowAny]

    def get(self, request):
        content = {'message': 'Hello, World!'}
        return Response(content)

class JobsApiView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [AllowAny]

    def get(self, request):
        jobs = Job.objects.all() # pyright: ignore
        serializer = JobSerializer(jobs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = JobCreateSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    #
    # def put(self, request):
    #     content = {'message': 'Update a job'}
    #     return Response(content)
    # def delete(self, request):
    #     content = {'message': 'Delete a job'}
    #     return Response(content

from django.test import TestCase

# Create your tests here.
from django.test import TestCase
from .models import Todo


class TodoModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        Todo.objects.create(title="first todo", body="a body here")

    def test_title_content(self):
        todo = Todo.objects.get(id=1)
        excepted_object_name = f'{todo.title}'
        self.assertEqual(excepted_object_name, 'first todo')

    def test_body_content(self):
        todo = Todo.objects.get(id=1)
        excepted_object_name = f'{todo.body}'
        self.assertEqual(excepted_object_name, 'a body here')
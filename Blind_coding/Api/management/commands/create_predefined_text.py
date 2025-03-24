import base64
from django.core.management.base import BaseCommand
from api.models import PredefinedText

class Command(BaseCommand):
    help = 'Creates a new predefined text entry with base64 encoding'

    def add_arguments(self, parser):
        parser.add_argument('text', type=str, help='The text to be encoded and stored')
        parser.add_argument('--deactivate-others', action='store_true', help='Deactivate all other predefined texts')

    def handle(self, *args, **options):
        text = options['text']
        
        if options['deactivate_others']:
            PredefinedText.objects.update(is_active=False)
            self.stdout.write(self.style.SUCCESS('Deactivated all existing predefined texts'))
        
        predefined_text = PredefinedText.objects.create(
            content=text,
            is_active=True
        )
        
        self.stdout.write(self.style.SUCCESS(f'Successfully created predefined text with ID {predefined_text.id}'))
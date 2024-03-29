from django.db import models
from django.urls import reverse


class LocationVO(models.Model):
    closet_name = models.CharField(max_length=100, unique=True, null=True)
    section_number = models.PositiveSmallIntegerField()
    shelf_number = models.PositiveSmallIntegerField()
    import_href = models.CharField(max_length=200, unique=True, blank=True, null=True)

    def __str__(self):
        return self.closet_name

class Hat(models.Model):
    fabric = models.CharField(max_length=100)
    style_name = models.CharField(max_length=100)
    color = models.CharField(max_length=100)
    picture_url = models.URLField(null=True, blank=True)

    location = models.ForeignKey(
        LocationVO,
        related_name="locations",
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.style_name
    
    def get_api_url(self):
        return reverse("api_show_hat", kwargs={"pk": self.pk})
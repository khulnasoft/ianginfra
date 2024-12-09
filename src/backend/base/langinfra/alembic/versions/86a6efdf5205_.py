"""

Revision ID: 86a6efdf5205
Revises: e3162c1804e6
Create Date: 2024-12-09 00:19:32.034533

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
import sqlmodel
from sqlalchemy.engine.reflection import Inspector
from langinfra.utils import migration


# revision identifiers, used by Alembic.
revision: str = '86a6efdf5205'
down_revision: Union[str, None] = 'e3162c1804e6'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    conn = op.get_bind()
    # ### commands auto generated by Alembic - please adjust! ###
    pass
    # ### end Alembic commands ###


def downgrade() -> None:
    conn = op.get_bind()
    # ### commands auto generated by Alembic - please adjust! ###
    pass
    # ### end Alembic commands ###
